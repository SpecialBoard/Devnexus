import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FrostedGlassProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'div';
}

const FrostedGlass: React.FC<FrostedGlassProps> = ({
    children,
    className = '',
    type = 'div',
    ...props
}) => {
    const baseClasses = "backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-lg transition-all duration-300";
    const combinedClasses = `${baseClasses} ${className}`;

    if (type === 'button') {
        return (
            <motion.button
                className={combinedClasses}
                {...(props as HTMLMotionProps<"button">)}
            >
                {children}
            </motion.button>
        );
    }

    return (
        <motion.div
            className={combinedClasses}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default FrostedGlass;
