// Replace the placeholders below with your real Google Drive file IDs
// For direct download links use: https://drive.google.com/uc?export=download&id=<FILE_ID>

const driveUrl = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

export const DOWNLOAD_LINKS = {
  chrome: driveUrl('1U1lxru9lXnx8X7wLHj_7YR_wd5bm4BGC'),
  edge: driveUrl('11JOomCkSJ0XeeQmFIqJp3Oz90NSZmJIN'),
  firefox: driveUrl('1wUDb-KIKHIfB8jBnhhic4zHd45UNdDOt'),
};

export default DOWNLOAD_LINKS;
