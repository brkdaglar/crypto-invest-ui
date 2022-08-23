import "antd/dist/antd.css";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, PageHeader } from 'antd';
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import "./UsersSearch.css";

const data = [
    {
        key: '1',
        userkey: '65dfs5fd6s6fds6dfs67',
        role: 'Parent',
        transactions: "https://etherscan.io/",
    },
    {
        key: '2',
        userkey: 's6fds7fdysfdusufdds9',
        role: 'Child',
        transactions: Link,
    },
    {
        key: '3',
        userkey: 'skjjhksd7866786786',
        role: 'Parent',
        transactions: Link,
    },
    {
        key: '4',
        userkey: 'hajkds87d687687as',
        role: 'Child',
        transactions: Link,
    },
];

const UsersSearch = () => {

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
            title: 'User Key',
            dataIndex: 'userkey',
            key: 'userkey',
            width: '20%',
            ...getColumnSearchProps('userkey'),
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            width: '20%',
            ...getColumnSearchProps('role'),
            sorter: (a, b) => a.role.length - b.role.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Transactions',
            dataIndex: 'transactions',
            key: 'transactions',
            width: '20%',
            ...getColumnSearchProps('transactions'),
        },
    ];
    return (
        <div>
            <div className="ok" >

            <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png"  ></img>
            
                <h1 >
                    USERS
                </h1>
            </div>

            <Table columns={columns} dataSource={data} />
        </div>


    );
};


export default UsersSearch;

