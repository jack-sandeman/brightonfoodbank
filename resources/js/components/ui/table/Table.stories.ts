import type { Meta, StoryObj } from '@storybook/vue3';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '.';

const meta = {
    title: 'UI/Table',
    component: Table,
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: {
            Table,
            TableBody,
            TableCaption,
            TableCell,
            TableFooter,
            TableHead,
            TableHeader,
            TableRow,
        },
        template: `
            <Table>
                <TableCaption>A list of recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead class="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell class="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell class="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell class="font-medium">INV002</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>PayPal</TableCell>
                        <TableCell class="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell class="font-medium">INV003</TableCell>
                        <TableCell>Unpaid</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell class="text-right">$350.00</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colspan="3">Total</TableCell>
                        <TableCell class="text-right">$750.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        `,
    }),
};
