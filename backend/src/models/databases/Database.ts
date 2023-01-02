export abstract class Database {
  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
}
