import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getLeaderboard } from '../../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

const Leaderboard = () => {
  const { authState } = useOktaAuth();
  const [data, setDataInfo] = useState([]);

  useEffect(() => {
    //Getting data from backend for leaderboard
    getLeaderboard(authState).then(res => {
      console.log(res);
      setDataInfo(res);
    });
  }, [authState]);

  // Testing for ranking/ placements for the table

  // let index = [];
  // for (let i = 0; i <= data.length; i++) {
  //   index.push({ key: i, index: i });
  // }

  const table = [
    // Structre of the Table
    {
      title: 'W/L',
      children: [
        {
          title: 'Wins',
          dataIndex: 'Wins',
          width: 100,
        },
        {
          title: 'Losses',
          dataIndex: 'Losses',
          width: 100,
        },
      ],
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      width: 150,
    },
    {
      title: 'Total Points',
      dataIndex: 'Total_Points',
      key: 'Total_points',
      width: 100,
    },
    {
      title: 'Writing Points',
      dataIndex: 'WritingPoints',
      key: 'WritingPoints',
      width: 100,
    },
    {
      title: 'Drawing Points',
      dataIndex: 'DrawingPoints',
      key: 'DrawingPoints',
      width: 100,
    },
  ];

  return (
    <div className="leaderboard">
      <h2 className="h2">Leaderboard</h2>
      <Table
        rowClassName={'parent'}
        columns={table}
        rowKey="uid"
        dataSource={data}
      />
    </div>
  );
};

export default Leaderboard;
