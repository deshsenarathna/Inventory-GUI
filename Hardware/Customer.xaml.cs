using Hardware.Migrations.CustomerDbcontextMigrations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Hardware
{
    /// <summary>
    /// Interaction logic for Customer.xaml
    /// </summary>
    public partial class Customer : Window
    {

        private CustomerDbcontext _db = new CustomerDbcontext();

        public Customer()
        {
            InitializeComponent();
            LoadData();

        }

        private void LoadData()
        {
            customerGrid.ItemsSource = _db.customers.ToList();
        }
        public Customer(Customers Customers)
        {
            InitializeComponent();
            Customers = Customers;
            customernametextextBox.Text = Customers.customer.ToString();
            gendertextblock.Text = Customers.Gender;
            phonetextbox.Text = Customers.PhoneNo.ToString();
            
        }
        public Customers Customers { get; private set; }
        
        
        private void addButton_Click_c(object sender, RoutedEventArgs e)
        {
            try
            {
                
                var existingCustomer = _db.customers.FirstOrDefault(c => c.PhoneNo == Convert.ToInt32(phonetextbox.Text));

                if (existingCustomer != null)
                {
                    MessageBox.Show("A customer with this phone number already exists.", "Duplicate Entry", MessageBoxButton.OK, MessageBoxImage.Warning);
                    return;
                }

                
                Customers customer = new Customers
                {
                    customer = customernametextextBox.Text,
                    Gender = gendertextblock.Text,
                    PhoneNo = Convert.ToInt32(phonetextbox.Text)
                };

                
                _db.customers.Add(customer);
                _db.SaveChanges();

                LoadData(); 
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error in input: {ex.Message}", "Input Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }


        }

        private void editButton_Click_c(object sender, RoutedEventArgs e)
        {
            if (customerGrid.SelectedItem is Customers c)
            {
                Customers customer = new Customers();
                customer.customer = c.customer;
                customer.Gender = c.Gender;
                customer.PhoneNo = c.PhoneNo;
               

                c.customer = customer.customer;
                c.Gender = customer.Gender;
                c.PhoneNo = customer.PhoneNo;
                _db.customers.Update(c);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void deleteButton_Click_c(object sender, RoutedEventArgs e)
        {
            if (customerGrid.SelectedItem is Customers c)
            {
                _db.customers.Remove(c);
                _db.SaveChanges();
                LoadData();
            }
        }
    }
}
