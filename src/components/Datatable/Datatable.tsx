import DataTable from 'react-data-table-component';

interface IProps {
  tokens: ITokens;
}

const columns = [
  {
    name: 'Logo',
    cell: (row: IToken) => <img height="32px" alt={row.name} src={row.logoURI} />,
    maxWidth: '80px',
  },
  {
    name: 'Symbol',
    selector: (row: IToken): string => row.symbol,
    sortable: true,
    maxWidth: '80px',
  },
  {
    name: 'Name',
    selector: (row: IToken): string => row.name,
    sortable: true,
  }, {
    name: 'Address',
    selector: (row: IToken): string => row.address,
    sortable: true,
  },
  {
    name: 'Decimals',
    selector: (row: IToken): number => row.decimals,
    sortable: true,
  },
];

const Datatable = (props: IProps) => {
  return (
    <DataTable
      title="1inch Tokens"
      columns={columns}
      data={Object.values(props.tokens)}
      pagination
      paginationComponentOptions={{}}
    />
  )
};

export default Datatable;