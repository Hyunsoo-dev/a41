import React from 'react';

type TagsProps = {
    tag: string;
}

const Tags = ({tag}: TagsProps) => {
    return <div className={"tag_container"}>#{tag}</div>
}

export default Tags;