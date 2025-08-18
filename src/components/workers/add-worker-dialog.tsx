@@ .. @@
 import { toast } from "sonner";
-import Image from "next/image";
 import {
   Dialog,
@@ .. @@
                 ) : (
                   <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-3 aspect-square max-h-48">
-                    <Image 
+                    <img 
                       src={avatarPreview} 
                       alt="Avatar preview" 
-                      fill
-                      className="object-cover"
+                      className="w-full h-full object-cover"
                     />
                     <Button