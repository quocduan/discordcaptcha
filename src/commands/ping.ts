import { Context } from "detritus-client/lib/command";
import Client from "../structures/client";

export default {
    name: "ping",
    metadata: {
        description: "Displays the latency"
    },
    run: async (client: Client, ctx: Context) => {
        console.log("Begin ping ...........");
        const { gateway, rest } = await ctx.client.ping();
        await ctx.editOrReply(`Gateway: ${gateway}ms, Rest: ${rest}ms`);
        console.log("End ping!");
    }
}