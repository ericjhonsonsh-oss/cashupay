@@ .. @@
-import Link from "next/link";
-import { usePathname } from "next/navigation";
+import { Link, useLocation } from "react-router-dom";
 import { cn } from "@/lib/utils";
@@ .. @@
 export function MainNav() {
-  const pathname = usePathname();
+  const location = useLocation();
+  const pathname = location.pathname;
   const { firms, selectedFirmId } = useFirmsStore();