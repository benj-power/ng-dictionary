import { PartOfSpeech } from './part-of-speech.enum';
import { Tag } from './tag.interface';

export interface Word {
    uuid?: string;
    theWord?: string;
    definition?: string;
    partOfSpeech?: PartOfSpeech;
    pronunciation?: string;
    origin?: string;
    exampleUsage?: string;
    note?: string;
    tags?: Tag[];
    creationDate?: Date;
    createdBy?: string;
    timesViewed?: string;

    // non-api
    tagIds?: number[];
}
