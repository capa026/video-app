import { Stack, Box } from '@mui/material';

const Videos = ({ videos }) => (
  <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((item, index) => {
      <Box key={index}>
        {video.id.videoId && <VideoCard video={item} />}
        {video.id.ChannelId && <ChannelCard channelDetail={item} />}
      </Box>;
    })}
  </Stack>
);
export default Videos;
