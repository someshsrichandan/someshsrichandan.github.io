import React, { useRef, useEffect } from 'react';
import { Animator, useAnimator } from '@arwes/react-animator';
import { Animated } from '@arwes/react-animated';


export const AnimatorUIListener = (props) => {
    const elementRef = useRef(null);
    const animator = useAnimator();

    useEffect(() => {
        const element = elementRef.current;

        element.dataset.id = animator.node.id;
        animator.node.control.setForeignRef(element);
    }, []);

    return (
        <Animated
            ref={elementRef}
            animated={{
                initialStyle: { opacity: 0.2 },
                transitions: {
                    entering: { opacity: [0.2, 1] },
                    exiting: { opacity: [1, 0.2] }
                }
            }}
            hideOnExited={false}
        >
            {props.children}
        </Animated>
    );
};

const AnimationInView = ({ children, threshold }) => {
    const rootNodeRef = useRef(null);

    useEffect(() => {
        const rootNode = rootNodeRef.current;
        const childrenNodes = Array.from(rootNode.children);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                const id = element.dataset.id;
                const childNode = childrenNodes.find(node => id === node.id);

                // If the node element is visible, enter only that child node
                // in the parent node manager.
                if (entry.isIntersecting) {
                    rootNode.manager.enterChildren([childNode]);
                }
                // Otherwise, directly exit the child node.
                else {
                    childNode.send('exit');
                }
            });
        }, {
            threshold: threshold ?? 0.6
        });

        childrenNodes.forEach(node => {
            const element = node.control.getForeignRef();
            observer.observe(element);
        });
    }, []);

    return (

        <Animator
            duration={{ delay: 0, enter: 1.5 }}
            active={false}
            manager='stagger'
            nodeRef={rootNodeRef}
        >
            {children}

        </Animator>
    );
};

export default AnimationInView;

