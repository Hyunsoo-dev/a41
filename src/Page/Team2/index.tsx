import React, { useEffect, useState } from 'react';
import H0 from '../../Components/H0';
import { createClient } from 'contentful';
import { useParams } from 'react-router-dom';
import { ReactComponent as Twitter } from '../../Assets/twitter.svg';
import { ReactComponent as LinkedIn } from '../../Assets/linkedin.svg';
import ArticleCard from '../Portfolio2/ArticleCard';

import '../../Style/Team2.scss';

const Team2 = () => {
  const [detail, setDetail] = useState<any>();
  let { id } = useParams();

  useEffect(() => {
    const client = createClient({
      space: REACT_APP_CONETNTFUL_SPACE,
      accessToken: REACT_APP_CONTENTFUL_API_KEY,
    });

    client.getEntry(id as string).then(res => setDetail(res.fields));
    return () => {};
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return () => {};
  }, []);

  return (
    <div className={'container_bk'}>
      <div className={'content_box'}>
        {detail && (
          <>
            <H0 title={detail.name} />
            <div className={'profile_box'}>
              <img src={detail.profileImage.fields.file.url} alt={'profile_img'} className={'big_profile_img'} />
              <div>
                <div className={'row_box'}>
                  <div className={'en_name'}>{detail.name}</div>
                  <div className={'ko_name'}>{detail.koreanName}</div>
                </div>
                <div className={'position'}>{detail.position}</div>
                <a href={detail.sns.twitter} target={'_blank'} rel={'noreferrer'}>
                  <Twitter />
                </a>
                <a href={detail.sns.linkedin} target={'_blank'} rel={'noreferrer'}>
                  <LinkedIn />
                </a>
              </div>
              <div className={'big_img_border_box'} />
            </div>
            <hr />
            <div className={'profile_article'}>
              {detail &&
                detail.introduction.content.map((p: any, idx: number) => {
                  return (
                    <div className={'profile_section'} key={idx}>
                      {p.content[0].value}
                    </div>
                  );
                })}
            </div>
            <div className={'article_title_box'}>
              <div className={'article_title'}>article</div>
              <span className={'article_count'}>{detail.article && detail.article.length}</span>
            </div>
            <div className={'grid_box'}>
              {detail.article &&
                detail.article.map((e: any) => {
                  return <ArticleCard title={e.title} img={e.img} link={e.link} summary={e.summary} author={e.author} date={e.date} key={e.title} />;
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Team2;
