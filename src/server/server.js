import { createServer } from "miragejs";

export const MirageServer = () => {
  createServer({
    routes() {
      this.namespace = "api";
      this.get("/updatecounter", () => {
        return 25;
      });
    },
  });
};
