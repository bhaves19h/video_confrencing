import { createClient } from 'agora-rtm-react';

const appId = "30bebc593e444dafb77b2eda240588d1";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);