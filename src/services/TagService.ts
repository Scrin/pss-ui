import { Tag } from '../types';
import store from '../store';
import actions from '../redux/actions';
import { get, post, ApiResponse } from './api';

export const getTags = async () => {
  try {
    const response: ApiResponse<Array<Tag>> = await get('/admin/tag');
    if (response.data) {
      store.dispatch(actions.setTags(response.data));
    }
    return !!response.data;
  } catch (error) {
    return false;
  }
};

export const addTag = async (tag: Tag) => {
  try {
    const response: ApiResponse<Tag> = await post('/admin/tag', tag);
    if (response.data) {
      store.dispatch(actions.addTag(response.data));
    }
    return !!response.data;
  } catch (error) {
    return false;
  }
};

export const deleteTag = async (id: number) => {
  // TODO: delete ${API_URL}/admin/tag/id/${id}
};
