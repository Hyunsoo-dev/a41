import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import H0 from '../../Components/H0';
import TeamList from './TeamList';
import '../../Style/Team1.scss';

const Team1 = () => {
  const [data, setData] = useState([]);

  const api = process.env.RE;
  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONETNTFUL_SPACE as string,
      accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY as string,
    });

    client.getEntries({ content_type: 'team' }).then((res: any) => {
      return setData(res.items);
    });
    return () => {};
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return () => {};
  }, []);

  return (
    <div className={'container_bk'}>
      <div className={'content_box'}>
        <H0 title={'team'} />
        <div className={'grid_box'}>
          {data &&
            data.map((el: any, idx) => {
              return (
                <TeamList
                  id={el.sys.id}
                  img={el.fields.profileImage.fields.file.url}
                  enName={el.fields.name}
                  koName={el.fields.koreanName}
                  position={el.fields.position}
                  twit={el.fields.sns.twitter}
                  linkedIn={el.fields.sns.linkedin && el.fields.sns.linkedin}
                  key={el.sys.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Team1;
