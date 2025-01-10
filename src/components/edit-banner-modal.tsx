import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import { useState } from "react";

interface EditBannerModalProps {
   isOpen: boolean;
   onClose: () => void;
   currentBanner: string;
}

export function EditBannerModal({ isOpen, onClose, currentBanner }: EditBannerModalProps) {
   const [previewUrl, setPreviewUrl] = useState<string | null>(currentBanner);

   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         const url = URL.createObjectURL(file);
         setPreviewUrl(url);
      }
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onClose();
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
               <DialogTitle>Edit Banner</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="relative group">
                  {previewUrl ? (
                     <img
                        src={previewUrl}
                        alt="Banner"
                        width={600}
                        height={200}
                        className="w-full h-[200px] object-cover rounded-lg"
                     />
                  ) : (
                     <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-lg">
                        <Upload className="h-8 w-8 text-gray-400" />
                     </div>
                  )}
                  <label className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-lg">
                     <Upload className="h-6 w-6 mr-2" />
                     <span>Upload new banner</span>
                     <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                     />
                  </label>
               </div>
               <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={onClose}>
                     Cancel
                  </Button>
                  <Button type="submit">Save</Button>
               </div>
            </form>
         </DialogContent>
      </Dialog>
   );
}
