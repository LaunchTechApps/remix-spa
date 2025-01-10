import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface ArtistDetails {
   name: string;
   username: string;
   location: string;
}

interface EditArtistDetailsModalProps {
   isOpen: boolean;
   onClose: () => void;
   currentDetails: ArtistDetails;
}

export function EditArtistDetailsModal({
   isOpen,
   onClose,
   currentDetails,
}: EditArtistDetailsModalProps) {
   const [details, setDetails] = useState<ArtistDetails>(currentDetails);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setDetails((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onClose();
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>Edit Artist Details</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                     id="name"
                     name="name"
                     value={details.name}
                     onChange={handleChange}
                     required
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                     id="username"
                     name="username"
                     value={details.username}
                     onChange={handleChange}
                     required
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                     id="location"
                     name="location"
                     value={details.location}
                     onChange={handleChange}
                     required
                  />
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
