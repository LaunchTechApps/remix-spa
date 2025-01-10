import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import { useState } from "react";

interface EditProfilePictureModalProps {
   isOpen: boolean;
   onClose: () => void;
   currentProfilePicture: string;
}

export function EditProfilePictureModal({
   isOpen,
   onClose,
   currentProfilePicture,
}: EditProfilePictureModalProps) {
   const [previewUrl, setPreviewUrl] = useState<string | null>(currentProfilePicture);

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
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>Edit Profile Picture</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="flex justify-center">
                  <div className="relative group w-32 h-32">
                     {previewUrl ? (
                        <img
                           src={previewUrl}
                           alt="Profile"
                           width={128}
                           height={128}
                           className="rounded-full object-cover w-full h-full"
                        />
                     ) : (
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                           <Upload className="h-8 w-8 text-gray-400" />
                        </div>
                     )}
                     <label className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <Upload className="h-6 w-6" />
                        <input
                           type="file"
                           className="hidden"
                           accept="image/*"
                           onChange={handleImageUpload}
                        />
                     </label>
                  </div>
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
