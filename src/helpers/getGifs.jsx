export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=kp20iyYWxRJ0U3jzh3xvTKjy2nOXDTn3`
    const resp = await fetch ( url );
    const {data} = await resp.json();
    console.log(data,"data")

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}

