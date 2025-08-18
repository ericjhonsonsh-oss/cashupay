@@ .. @@
 import { useState } from "react";
-import { useRouter } from "next/navigation";
-import Image from "next/image";
+import { useNavigate } from "react-router-dom";
 import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
@@ .. @@
 export function WorkerCard({ worker }: WorkerCardProps) {
-  const router = useRouter();
+  const navigate = useNavigate();
   const { deleteWorker, updateWorker } = useWorkersStore();
@@ .. @@
             <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button
-                onClick={() => router.push(`/workers/${worker.id}`)}
+                onClick={() => navigate(`/workers/${worker.id}`)}
                 className="rounded-full h-8 px-3 py-1 shadow-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
               >
                 <span>Details</span>
@@ .. @@
               <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                 {worker.avatar ? (
-                  <Image 
+                  <img 
                     src={worker.avatar} 
                     alt={worker.name} 
-                    fill 
-                    className="object-cover"
+                    className="w-full h-full object-cover"
                   />
                 ) : (
                   <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">