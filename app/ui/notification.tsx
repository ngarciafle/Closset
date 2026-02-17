"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface NotificationProps {
  message: string | null; // Si es null, no mostramos nada
  isVisible: boolean;
  onClose: () => void;
}

export default function Notification({ message, isVisible, onClose }: NotificationProps) {
  useEffect(() => {
    if (!isVisible || !message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000)
    return () => clearTimeout(timer);
  }, [message, isVisible]);


  return (
    <AnimatePresence>
        <motion.div
          // Estado inicial (desde donde viene)
          initial={{ opacity: 0, y: 20 }} 
          // Estado visible
          animate={{ opacity: 1, y: 0 }}   
          // Animación de salida (desaparece hacia arriba)
          exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl"
        >
          {message}
        </motion.div>
    </AnimatePresence>
  );
};