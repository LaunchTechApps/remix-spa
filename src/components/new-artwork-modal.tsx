import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Link {
   name: string;
   url: string;
}

interface ArtworkData {
   id?: number;
   name: string;
   images: string[];
   dimensions: string;
   unit: string;
   medium: string;
   description: string;
   links: Link[];
   status: string;
}

interface NewArtworkModalProps {
   isOpen: boolean;
   onClose: () => void;
   initialData?: ArtworkData;
   isEditing?: boolean;
}

export function NewArtworkModal({
   isOpen,
   onClose,
   initialData,
   isEditing = false,
}: NewArtworkModalProps) {
   const [title, setTitle] = useState("");
   const [width, setWidth] = useState("");
   const [height, setHeight] = useState("");
   const [unit, setUnit] = useState("inches");
   const [medium, setMedium] = useState("");
   const [description, setDescription] = useState("");
   const [links, setLinks] = useState<Link[]>([{ name: "", url: "" }]);
   const [images, setImages] = useState<File[]>([]);
   const [previewUrls, setPreviewUrls] = useState<string[]>([]);
   const [availability, setAvailability] = useState("available");

   useEffect(() => {
      if (initialData && isEditing) {
         setTitle(initialData.name);
         const [width, height] = initialData.dimensions.split("x").map((dim) => dim.trim());
         setWidth(width);
         setHeight(height);
         setUnit(initialData.unit);
         setMedium(initialData.medium);
         setDescription(initialData.description);
         setLinks(initialData.links.length > 0 ? initialData.links : [{ name: "", url: "" }]);
         setPreviewUrls(initialData.images);
         setAvailability(initialData.status);
      }
   }, [initialData, isEditing]);

   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      const newImages = [...images, ...files].slice(0, 10);
      setImages(newImages);

      const newPreviewUrls = newImages.map((file) => URL.createObjectURL(file));
      setPreviewUrls(newPreviewUrls);
   };

   const handleRemoveImage = (index: number) => {
      const newImages = images.filter((_, i) => i !== index);
      setImages(newImages);

      const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
      setPreviewUrls(newPreviewUrls);
   };

   const handleAddLink = () => {
      setLinks([...links, { name: "", url: "" }]);
   };

   const handleLinkChange = (index: number, field: "name" | "url", value: string) => {
      const newLinks = [...links];
      newLinks[index][field] = value;
      setLinks(newLinks);
   };

   const handleRemoveLink = (index: number) => {
      const newLinks = links.filter((_, i) => i !== index);
      setLinks(newLinks);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const _artworkData = {
         title,
         dimensions: `${width} x ${height}`,
         unit,
         medium,
         description,
         links: links.filter((link) => link.name !== "" && link.url !== ""),
         images,
         availability,
      };
      onClose();
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
               <DialogTitle>{isEditing ? "Edit Artwork" : "New Artwork"}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[80vh]">
               <form onSubmit={handleSubmit} className="space-y-6 px-4 pb-4">
                  <div className="space-y-2">
                     <Label htmlFor="title">Title</Label>
                     <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                     />
                  </div>

                  <div className="space-y-2">
                     <Label>Artwork Images (Max 10)</Label>
                     <div className="border-2 border-dashed rounded-lg p-4">
                        <div className="flex flex-wrap gap-2">
                           {previewUrls.map((url, index) => (
                              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                              <div key={index} className="relative">
                                 <img
                                    src={url}
                                    alt={`Preview ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="rounded-lg object-cover"
                                 />
                                 <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                                    onClick={() => handleRemoveImage(index)}
                                 >
                                    <X className="h-4 w-4" />
                                 </Button>
                              </div>
                           ))}
                           {previewUrls.length < 10 && (
                              <label className="flex items-center justify-center w-[100px] h-[100px] rounded-lg bg-gray-100 cursor-pointer">
                                 <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    multiple
                                 />
                                 <Upload className="h-6 w-6 text-gray-400" />
                              </label>
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-end">
                     <div className="space-y-2">
                        <Label htmlFor="width">Width</Label>
                        <Input
                           id="width"
                           type="number"
                           min="0"
                           step="0.1"
                           value={width}
                           onChange={(e) => setWidth(e.target.value)}
                           required
                        />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="height">Height</Label>
                        <Input
                           id="height"
                           type="number"
                           min="0"
                           step="0.1"
                           value={height}
                           onChange={(e) => setHeight(e.target.value)}
                           required
                        />
                     </div>
                     <div className="space-y-2">
                        <Select value={unit} onValueChange={setUnit}>
                           <SelectTrigger className="w-[100px]">
                              <SelectValue placeholder="Unit" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="inches">Inches</SelectItem>
                              <SelectItem value="cm">Centimeters</SelectItem>
                              <SelectItem value="feet">Feet</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="medium">Medium</Label>
                     <Input
                        id="medium"
                        value={medium}
                        onChange={(e) => setMedium(e.target.value)}
                        placeholder="e.g., Oil on canvas, Digital print, etc."
                        required
                     />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="description">Description</Label>
                     <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="min-h-[100px]"
                        maxLength={1000}
                        required
                     />
                     <div className="text-sm text-gray-500 text-right">
                        {description.length} / 1000
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex items-center justify-between">
                        <Label>Links</Label>
                        <Button type="button" variant="outline" size="sm" onClick={handleAddLink}>
                           Add Link
                        </Button>
                     </div>
                     <div className="space-y-2">
                        {links.map((link, index) => (
                           // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                           <div key={index} className="flex gap-2">
                              <Input
                                 placeholder="Link Name"
                                 value={link.name}
                                 onChange={(e) => handleLinkChange(index, "name", e.target.value)}
                              />
                              <Input
                                 type="url"
                                 placeholder="https://"
                                 value={link.url}
                                 onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                              />
                              {links.length > 1 && (
                                 <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleRemoveLink(index)}
                                 >
                                    <X className="h-4 w-4" />
                                 </Button>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <Label>Availability</Label>
                     <RadioGroup
                        value={availability}
                        onValueChange={setAvailability}
                        className="flex space-x-4"
                     >
                        <div className="flex items-center space-x-2">
                           <RadioGroupItem value="available" id="available" />
                           <Label htmlFor="available">Available</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                           <RadioGroupItem value="sold" id="sold" />
                           <Label htmlFor="sold">Sold</Label>
                        </div>
                     </RadioGroup>
                  </div>

                  <div className="flex justify-end">
                     <Button type="submit">{isEditing ? "Update" : "Submit"}</Button>
                  </div>
               </form>
            </ScrollArea>
         </DialogContent>
      </Dialog>
   );
}
