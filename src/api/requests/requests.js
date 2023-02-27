export const GET = 'GET';
export const POST = 'POST';

export function request(url, method, preCallback, callback, failCallback, decisively) {
    let props = {};
    if(preCallback !== undefined) preCallback();
    fetch(url, {method: method})
        .then(data => data.json())
        .then(callback, () => { if(failCallback !== undefined) failCallback(props) })
        .finally(() => { if(decisively !== undefined) decisively(props) });
}