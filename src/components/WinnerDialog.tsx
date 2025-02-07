import React from 'react';
import { Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from './Confetti';

interface WinnerDialogProps {
  isOpen: boolean;
  prize: string;
  onClose: () => void;
}

const WinnerDialog: React.FC<WinnerDialogProps> = ({ isOpen, prize, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Confetti />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            <div className="text-center">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 drop-shadow-lg" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Congratulations!
                </h2>
                <p className="text-lg text-gray-600 mb-6">You won:</p>
                <p className="text-xl font-bold text-purple-600 mb-8 px-4 py-2 bg-purple-50 rounded-lg inline-block">
                  {prize}
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Claim Prize
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WinnerDialog