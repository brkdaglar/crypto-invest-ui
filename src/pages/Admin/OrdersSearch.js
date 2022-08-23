import "antd/dist/antd.css";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useRef, useState } from 'react';

const data = [
    {
        key: '1',
        date: '12.08.2022',
        hash: 'd37hfj3785gjg399gddh',
        from: '0x6ds6ds6sd78sd68sd8sd',
        to: '0xd768sd67876sd7sds89d',
        amount: 0.5,
    },
    {
        key: '2',
        date: '21.08.2022',
        hash: 'hd85s85f7f5ss89d4d57s8s',
        from: '0xa6sa66as7fsdf9g97g',
        to: '0x67gf6d6gdf6dg786gdd',
       amount: 2,
    },
    {
        key: '3',
        date: '22.08.2022',
        hash: '87dd6f7f76sd76d5s7d78sd8d',
        from: '0x95df5dd7da7dfa5f97d',
        to: '0x23454hhhdhkjdjkdlkl',
        amount: 3,
    },
    {
        key: '4',
        date: '20.08.2022',
        hash: 's7667s6dsd7sd6s8d',
        from: '0x398g69dsggd9djdf',
        to: '0x42939jfdjdfkjdfkjd',
        amount: 0.75,
    },
];

const OrdersSearch = () => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },

    });

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            defaultSortOrder: 'descend',
            key: 'date',
            width: '10%',
            ...getColumnSearchProps('date'),
           /* sorter: (a, b) => a.date - b.date,
            sortDirections: ['descend', 'ascend'], */
        },
        {
            title: 'Hash',
            dataIndex: 'hash',
            key: 'hash',
            width: '20%',
            ...getColumnSearchProps('hash'),
        },
        {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
            width: '20%',
            ...getColumnSearchProps('from'),
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
            width: '20%',
            ...getColumnSearchProps('to'),
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            width: '12%',
            ...getColumnSearchProps('amount'),
            sorter: (a, b) => a.amount - b.amount,
            sortDirections: ['descend', 'ascend'], 
        },
        
    ];
    return <Table columns={columns} dataSource={data} />;
};


export default OrdersSearch;