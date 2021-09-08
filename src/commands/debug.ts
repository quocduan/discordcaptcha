import { Context } from "detritus-client/lib/command";
import Client from "../structures/client";
import { ShardClient } from "detritus-client";

export default {
    name: "debug",
    metadata: {
        description: "Displays bot statistics"
    },
    ownerOnly: true,
    run: async (client: Client, ctx: Context) => {
        console.log('Begin debugging.....');
        const memory = Object.entries(process.memoryUsage()).map(([k, v]) => `${k}: ${(v / 1024 / 1024).toFixed(2)} MB`);
        // const debug_message = `**Memory:**\n ${memory.join("\n")}\n\n**Bot statistics:**\nVerification queue: ${client.queue.size}\nChannel cache size: ${(<ShardClient>client.client).channels.size}`;
        const debug_message = `**Memory:**\n ${memory.join("\n")}\n\n**Bot statistics:**\nVerification queue: ${client.queue.size}`;
        console.log(debug_message);
        await ctx.editOrReply(debug_message);
        console.log("Done debugging command!")
    }
}