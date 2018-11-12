const nodeAtob = raw => Buffer.from(raw, 'base64').toString();

const atob = atob || nodeAtob;

export default atob;
