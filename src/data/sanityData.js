import { client } from '../lib/sanity';

// Existing functions
export async function getProjects() {
  try {
    return await client.fetch(`*[_type == "project"] | order(date desc)`);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getGallery() {
  try {
    return await client.fetch(`*[_type == "gallery"] | order(_createdAt desc)`);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
}

export async function getVideos() {
  try {
    return await client.fetch(`*[_type == "video"] | order(_createdAt desc)`);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

export async function getTeam() {
  try {
    return await client.fetch(`*[_type == "team"] | order(order asc)`);
  } catch (error) {
    console.error('Error fetching team:', error);
    return [];
  }
}

// New page-specific functions
export async function fetchAbout() {
  try {
    return await client.fetch(`*[_type == "aboutPage"][0]`);
  } catch (error) {
    console.error('Error fetching about page:', error);
    return null;
  }
}

export async function fetchVision() {
  try {
    return await client.fetch(`*[_type == "visionPage"][0]`);
  } catch (error) {
    console.error('Error fetching vision page:', error);
    return null;
  }
}

export async function fetchMission() {
  try {
    return await client.fetch(`*[_type == "missionPage"][0]`);
  } catch (error) {
    console.error('Error fetching mission page:', error);
    return null;
  }
}

export async function fetchTeamMembers() {
  try {
    return await client.fetch(`*[_type == "teamMember"] | order(name asc)`);
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function fetchProjects() {
  try {
    return await client.fetch(`*[_type == "project"] | order(_createdAt desc)`);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function fetchThankYou() {
  try {
    return await client.fetch(`*[_type == "thankYouPage"][0]`);
  } catch (error) {
    console.error('Error fetching thank you page:', error);
    return null;
  }
}

export async function fetchRunwayVideos() {
  try {
    return await client.fetch(`*[_type == "runwayVideo"] | order(_createdAt desc)`);
  } catch (error) {
    console.error('Error fetching runway videos:', error);
    return [];
  }
}

// Admin functions (already exist)
export async function createProject(data) {
  try {
    return await client.create({
      _type: 'project',
      ...data,
    });
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

export async function uploadImage(file) {
  try {
    return await client.assets.upload('image', file);
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

export async function createGalleryItem(imageAsset) {
  try {
    return await client.create({
      _type: 'gallery',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id,
        },
      },
    });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    throw error;
  }
}

export async function createVideo(data) {
  try {
    return await client.create({
      _type: 'video',
      ...data,
    });
  } catch (error) {
    console.error('Error creating video:', error);
    throw error;
  }
}
