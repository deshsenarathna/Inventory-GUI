﻿using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using static System.Net.Mime.MediaTypeNames;

namespace Hardware
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        private ItemDbContext _db = new ItemDbContext();

        public MainWindow()
        {

            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            itemsGrid.ItemsSource = _db.Items.ToList();
        }
        public Items Items { get; private set; }
        public MainWindow(Items Item)
        {
            InitializeComponent();
            Items = Item;
            ProductidtextextBox.Text = Item.ItemCode.ToString();
            ProductnameTextBox.Text = Item.Name;
            qtytextBox.Text = Item.Quantity.ToString();
            pricetextBox.Text = Item.Price.ToString();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                int itemCode = Convert.ToInt32(ProductidtextextBox.Text);

                
                var existingItem = _db.Items.FirstOrDefault(i => i.ItemCode == itemCode);

                if (existingItem != null)
                {
                    MessageBox.Show("An item with this ItemCode already exists.", "Duplicate Entry", MessageBoxButton.OK, MessageBoxImage.Warning);
                    return;
                }

                
                Items item = new Items
                {
                    ItemCode = itemCode,
                    Name = ProductnameTextBox.Text,
                    Quantity = Convert.ToInt32(qtytextBox.Text),
                    Price = Convert.ToDecimal(pricetextBox.Text)
                };

                _db.Items.Add(item);
                _db.SaveChanges();

                LoadData();

                
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error in input: {ex.Message}", "Input Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        

       

        

        private void editButton_Click(object sender, RoutedEventArgs e)
        {
            if (itemsGrid.SelectedItem is Items i)
            {
                Items item = new Items();
                item.ItemCode = i.ItemCode;
                item.Name = i.Name;
                item.Price = i.Price;
                item.Quantity = i.Quantity;

               
                    i.ItemCode = item.ItemCode;
                    i.Name = item.Name;
                    i.Price = item.Price;
                    i.Quantity = item.Quantity;
                    _db.Items.Update(i);
                    _db.SaveChanges();
                    LoadData();
               }
            }

        private void deleteButton_Click(object sender, RoutedEventArgs e)
        {
            if (itemsGrid.SelectedItem is Items i)//if it true ,give name p to product
            {
                _db.Items.Remove(i);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void dashboardButton_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
            Dashboard newWindow = new Dashboard();

            newWindow.Show();
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            this.Close();

              Customer newWindow = new Customer();

                newWindow.Show();
        }
    }
}