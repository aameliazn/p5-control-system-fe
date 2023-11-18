'use client'
import { Avatar, Card, Pagination } from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Style from './style.module.css';
const { Meta } = Card;

export default function Porto() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; 
  const totalCards = 7; 

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalCards);
    const cardsToRender = [];
    for (let i = startIndex; i < endIndex; i++) {
      cardsToRender.push(
        <div key={i}>
          <Card
            style={{
              width: 400,
              marginTop: 16,
            }}
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="elipsis" />,
            ]}
          >
            <Meta
              description={
                <span style={{ fontSize: '1.4em', color: 'black' }}>
                  Apakah kamu sudah membuat kampanye hemat energi air dan sosialisasi pada orang tua di rumah?
                </span>
              }
            />
          </Card>
        </div>
      );
    }
    return cardsToRender;
  };

  return (
    <>
      <div className={Style.warp}>
        {renderCards()}
      </div>
      <div>
      <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalCards}
          onChange={onPageChange}
          style={{ marginTop: '20px', textAlign: 'center' }}
        />
      </div>
    </>
  );
}