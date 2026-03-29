import React, { useEffect, useRef } from 'react';

export default function CursorInk() {
    const cursorRef = useRef(null);
    const stamps = ["X", "NO", "ERROR", "+", "///"];

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        const onDown = (e) => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';

            // Abort if clicking an interactive element
            if (e.target.closest('button, a, input, [role="button"], .product-card, .ci-remove, .cart-close')) {
                return;
            }

            const stamp = document.createElement('div');
            stamp.className = 'ink-stamp';
            stamp.textContent = stamps[Math.floor(Math.random() * stamps.length)];
            stamp.style.left = e.pageX + 'px';
            stamp.style.top = e.pageY + 'px';
            const rot = (Math.random() * 90) - 45;
            stamp.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(${Math.random() * 1.5 + 0.5})`;
            
            // Append visually to body to avoid clipping or strict layout flows
            document.body.appendChild(stamp);
        };

        const onUp = () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mousedown', onDown);
        document.addEventListener('mouseup', onUp);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('mouseup', onUp);
        };
    }, []);

    return <div id="cursor-crosshair" ref={cursorRef}></div>;
}
