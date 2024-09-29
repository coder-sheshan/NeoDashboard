import avator1 from '../assets/1.jpg';
import avator2 from '../assets/2.jpg';
import avator3 from '../assets/3.jpg';
import avator4 from '../assets/4.jpg';
import avator5 from '../assets/5.jpg';
import { Order } from '../components/table';

export const revenueDataArray = [
    {
        title: 'Total revenue',
        amount: '$2.6M',
        percentageChange: '+4.5%',
        timePeriod: 'From Last Week',
    },
    {
        title: 'Net Profit',
        amount: '$1.2M',
        percentageChange: '+3.8%',
        timePeriod: 'From Last Month',
    },
    {
        title: 'Gross Margin',
        amount: '$3.4M',
        percentageChange: '-2.1%',
        timePeriod: 'From Last Quarter',
    },
];

export const orders: Order[] = [
    {
        orderNumber: '3000',
        purchaseDate: 'May 9, 2024',
        customer: 'John Doe',
        event: 'Bear Hug: Live in Concert',
        amount: 'US$80.00',
        image: avator1,
    },
    {
        orderNumber: '3001',
        purchaseDate: 'June 12, 2024',
        customer: 'Jane Smith',
        event: 'Rock the World: Stadium Tour',
        amount: 'US$120.00',
        image: avator2,
    },
    {
        orderNumber: '3002',
        purchaseDate: 'July 21, 2024',
        customer: 'Michael Johnson',
        event: 'Jazz Night: Smooth Vibes',
        amount: 'US$60.00',
        image: avator3,
    },
    {
        orderNumber: '3003',
        purchaseDate: 'August 5, 2024',
        customer: 'Emily Clark',
        event: 'Pop Fest 2024',
        amount: 'US$100.00',
        image: avator4,
    },
    {
        orderNumber: '3004',
        purchaseDate: 'August 15, 2024',
        customer: 'Robert Brown',
        event: 'Classical Evening: Symphony Live',
        amount: 'US$50.00',
        image: avator5,
    },
    {
        orderNumber: '3005',
        purchaseDate: 'September 2, 2024',
        customer: 'Linda Davis',
        event: 'Electronic Beats Festival',
        amount: 'US$85.00',
        image: avator3,
    },
    {
        orderNumber: '3006',
        purchaseDate: 'September 15, 2024',
        customer: 'James Wilson',
        event: 'Folk Music Carnival',
        amount: 'US$70.00',
        image: avator1,
    },
    {
        orderNumber: '3007',
        purchaseDate: 'October 1, 2024',
        customer: 'Patricia Johnson',
        event: 'Reggae Vibes: Island Edition',
        amount: 'US$95.00',
        image: avator4,
    },
    {
        orderNumber: '3008',
        purchaseDate: 'October 10, 2024',
        customer: 'David Martinez',
        event: 'Hip-Hop Nights: Battle of Beats',
        amount: 'US$110.00',
        image: avator3,
    },
    {
        orderNumber: '3009',
        purchaseDate: 'November 5, 2024',
        customer: 'Sophia Garcia',
        event: 'Indie Rock Fest',
        amount: 'US$90.00',
        image: avator2,
    },
];
