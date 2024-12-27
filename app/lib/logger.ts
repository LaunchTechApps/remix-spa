export type LogLevel = "debug" | "info" | "warn" | "error";
const LOG_LEVEL: LogLevel = import.meta.env.VITE_LOG_LEVEL;

class Logger {
   private level: LogLevel;
   private now(): string {
      return new Date().toISOString();
   }

   constructor(level: LogLevel = "info") {
      this.level = level;
   }

   private shouldLog(currentLevel: LogLevel): boolean {
      const levels: LogLevel[] = ["debug", "info", "warn", "error"];
      return levels.indexOf(currentLevel) >= levels.indexOf(this.level);
   }

   private getCallerLocation(): string | undefined {
      const error = new Error();
      const stack = error.stack?.split("\n") || [];

      const callerLine = stack[4]?.trim();

      const match = callerLine?.match(/\(([^)]+)\)/);
      return match ? match[1] : undefined;
   }

   // biome-ignore lint/suspicious/noExplicitAny: Allowing flexible logging inputs for convenience.
   private log(level: LogLevel, message?: any, ...optionalParams: any[]): void {
      if (!this.shouldLog(level)) return;
      const location = this.getCallerLocation();

      // biome-ignore lint/suspicious/noExplicitAny: Allowing flexible logging inputs for convenience.
      const logObject: Record<string, any> = {
         level: level.toUpperCase(),
         timestamp: this.now(),
         message: message,
         location: location,
      };

      if (optionalParams.length > 0) {
         logObject.optionalParams = optionalParams;
      }

      console[level](JSON.stringify(logObject));
   }

   // biome-ignore lint/suspicious/noExplicitAny: Allowing flexible logging inputs for convenience.
   debug(message?: any, ...optionalParams: any[]): void {
      this.log("debug", message, ...optionalParams);
   }

   // biome-ignore lint/suspicious/noExplicitAny: Allowing flexible logging inputs for convenience.
   info(message?: any, ...optionalParams: any[]): void {
      this.log("info", message, ...optionalParams);
   }

   // biome-ignore lint/suspicious/noExplicitAny: Allowing flexible logging inputs for convenience.
   warn(message?: any, ...optionalParams: any[]): void {
      this.log("warn", message, ...optionalParams);
   }

   // biome-ignore lint/suspicious/noExplicitAny: Allowing flexible logging inputs for convenience.
   error(message?: any, ...optionalParams: any[]): void {
      this.log("error", message, ...optionalParams);
   }
}

const log = new Logger(LOG_LEVEL);
export default log;
