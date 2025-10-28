import { client } from '../lib/sanity';

// Create new doc of any type
export async function createDoc(type, data) {
  try {
    return await client.create({ _type: type, ...data });
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
}

// Delete any doc by ID
export async function deleteDoc(id) {
  try {
    return await client.delete(id);
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
}

// Update existing doc
export async function updateDoc(id, data) {
  try {
    return await client.patch(id).set(data).commit();
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
}

