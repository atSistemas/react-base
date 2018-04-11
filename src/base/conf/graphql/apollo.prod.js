import { generateConfig } from "./apollo.common";

const uri = "https://api.graph.cool/simple/v1/cjfrxqm762nu00103ycthhmi6";

const authorizationToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjMyNjAxMTAsImNsaWVudElkIjoiY2pmcnhxbTc2Mm51MTAxMDNnenc0Mmx6cCJ9.IXQzQxAJ3mZ0x6hvGHNZDZd1db7KAh2Yfm8smtpc-3U";

const options = {
  uri,
  headers: {
    Authorization: `Bearer ${authorizationToken}`
  },
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : {}
};

export default generateConfig(options);
