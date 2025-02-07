import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IdDialogProps {
  isOpen: boolean;
  onSubmit: (id: string) => void;
}

const IdDialog: React.FC<IdDialogProps> = ({ isOpen, onSubmit }) => {
  const [id, setId] = useState('');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Enter Your ID
            </h2>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter your ID (e.g., GD001)"
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-6 text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSubmit(id)}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Let's Spin!
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IdDialog