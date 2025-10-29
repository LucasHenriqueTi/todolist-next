const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/posts.json`, {
    }); 

    const data = await res.json();
    console.log(data);
    return data[0].posts;
}

export { getPosts };