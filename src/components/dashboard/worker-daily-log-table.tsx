"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLogsStore, useWorkersStore, useFirmsStore, useSettingsStore } from "@/lib/store";

export function WorkerDailyLogTable() {
  const [todayLogs, setTodayLogs] = useState<any[]>([]);
  const { workLogs } = useLogsStore();
  const { workers } = useWorkersStore();
  const { selectedFirmId } = useFirmsStore();
  const { settings } = useSettingsStore();

  useEffect(() => {
    if (!selectedFirmId) return;

    const today = format(new Date(), "yyyy-MM-dd");
    
    // Get today's work logs for the selected firm
    const todayWorkLogs = workLogs.filter(
      log => log.firmId === selectedFirmId && log.date === today
    );

    // Combine with worker information
    const logsWithWorkers = todayWorkLogs.map(log => {
      const worker = workers.find(w => w.id === log.workerId);
      return {
        ...log,
        workerName: worker?.name || "Unknown Worker",
      };
    });

    setTodayLogs(logsWithWorkers);
  }, [workLogs, workers, selectedFirmId]);

  if (!selectedFirmId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Today's Work Logs</CardTitle>
          <CardDescription>
            Please select a firm to view today's work logs
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="bg-primary/5">
          <CardTitle>Today's Work Logs</CardTitle>
          <CardDescription>
            Work completed today ({format(new Date(), "PPP")})
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {todayLogs.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">No work logs for today</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Worker</TableHead>
                    <TableHead className="text-right">Kgs Processed</TableHead>
                    <TableHead className="text-right">Amount Earned</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {todayLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.workerName}</TableCell>
                      <TableCell className="text-right">{log.kgsProcessed} kg</TableCell>
                      <TableCell className="text-right">{settings.currency} {log.amountEarned}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}