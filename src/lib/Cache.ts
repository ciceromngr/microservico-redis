import RedisIo ,{ Redis } from "ioredis";
import redisConfig from "../config/redis-config";

class Cache {
    public redis: Redis

    constructor() {
        this.redis = new RedisIo(redisConfig)
    }

    async get(key: string): Promise<[]> {
        const asynRedisGet = await this.redis.get(key)
        return asynRedisGet ? JSON.parse(asynRedisGet) : null
    }

    async set(key: string, value: any) {
        return this.redis.set(key, Buffer.from(JSON.stringify(value)))
    }

    del(key: string) {
        return this.redis.del(key)
    }
}

export default new Cache()