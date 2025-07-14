/* eslint-disable @typescript-eslint/no-unused-vars */
// Temporary lightweight stub for Supabase server client – replace with real implementation later.
// This avoids compile-time errors when developing without setting up Supabase.

// Generic query result shape
interface Result<T> {
  data: T | null;
  error: null;
}

export function createClient() {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    from<T = any>(_table: string) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        select(_columns?: string) {
          return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            eq(_col: string, _value: any) {
              return {
                async single(): Promise<Result<T>> {
                  return { data: null, error: null };
                },
                // Support the pattern .order().eq() used in the videos query
                order() {
                  return this;
                },
              } as const;
            },
            order() {
              return this;
            },
          } as const;
        },
      } as const;
    },
  } as const;
}
