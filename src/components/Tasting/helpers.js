import { TAGS } from './constants';

// TODO: secondary and tertiary tags
export function getTags(VARIETY) {
  return TAGS.reduce((tags, tag) => {
    if (tag.varieties.primary.includes(VARIETY)) {
      tags.push(tag.name);
    }
    return tags;
  }, []);
}
