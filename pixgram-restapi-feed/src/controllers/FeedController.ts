import { Request, Response } from 'express';
import { Feeds } from '../models/Feeds';

import * as AWS from '../aws';

/**
 * Get a signed url
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */
export async function getSignedUrl(req: Request, res: Response) {
    let { fileName } = req.params;
    const url = AWS.getPutSignedUrl(fileName);

    res.status(201).json({ url: url });

    return;
}

/**
 * Get all feeds
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */
export async function getAllFeed(req: Request, res: Response) {
    const items = await Feeds.findAndCountAll({ order: [['id', 'DESC']] });

    items.rows.map((item) => {
        if (item.url) {
            item.url = AWS.getGetSignedUrl(item.url);
        }
    });

    res.status(200).json(items);

    return;
}

/**
 * Get a specific feed
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */
export async function getFeed(req: Request, res: Response) {
    let { id } = req.params;
    const item = await Feeds.findByPk(id);

    res.status(200).json(item);

    return;
}

/**
 * Post a feed
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */
// Post meta data and the filename after a file is uploaded
// NOTE the file name is they key name in the s3 bucket.
// body : {caption: string, fileName: string};
export async function postFeed(req: Request, res: Response) {
    const { caption, url } = req.body;

    const item = await new Feeds({
        caption: caption,
        url: url,
    });

    const savedItem = await item.save();

    savedItem.url = AWS.getGetSignedUrl(savedItem.url);

    res.status(201).json(savedItem);

    return;
}
