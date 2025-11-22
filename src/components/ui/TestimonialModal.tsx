import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogOverlay,
  DialogTitle, // Import DialogTitle
} from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

const TestimonialModal = ({ isOpen, onClose, imageUrl, altText }: TestimonialModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogOverlay asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80"
            />
          </DialogOverlay>
          <DialogContent
            className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 transform border-0 bg-transparent p-0"
            aria-describedby={undefined}
          >
            <DialogTitle className="sr-only">{altText}</DialogTitle>{' '}
            {/* Add visually hidden DialogTitle */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative p-4"
            >
              <img src={imageUrl} alt={altText} className="h-auto w-full" />
            </motion.div>
            <DialogClose
              asChild
              className="absolute right-0 top-0 m-2 rounded-full bg-white/50 p-2 text-gray-900 backdrop-blur-sm transition-all hover:bg-white focus:outline-none"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default TestimonialModal;
