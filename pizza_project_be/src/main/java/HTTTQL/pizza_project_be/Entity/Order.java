package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "order_id")
    private String order_id;

    @Column(name = "note")
    private String note;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod;

    @Column(name = "day_order", nullable = false)
    private Date dayOrder;

    private int total;


    @Column(name = "state", nullable = false)
    private String state;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "staff_id", nullable = false)
    private Staff staff;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<ComboInOrder> comboInOrders;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<PizzaInOrder> pizzaInOrders;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<FoodInOrder> foodInOrders;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<DrinkInOrder> drinkInOrders;

    public Order(String id, String note, String paymentMethod, Date dayOrder, String state, Client client, Staff staff, List<ComboInOrder> comboInOrders, List<PizzaInOrder> pizzaInOrders, List<FoodInOrder> foodInOrders, List<DrinkInOrder> drinkInOrders) {
        this.order_id = id;
        this.note = note;
        this.paymentMethod = paymentMethod;
        this.dayOrder = dayOrder;
        this.state = state;
        this.client = client;
        this.staff = staff;
        this.comboInOrders = comboInOrders;
        this.pizzaInOrders = pizzaInOrders;
        this.foodInOrders = foodInOrders;
        this.drinkInOrders = drinkInOrders;
    }

    public Order() {
    }

    public int getTotal() {
        for (ComboInOrder comboInOrder : comboInOrders) {
            this.total += comboInOrder.getPriceAtBill();
        }
        for(PizzaInOrder pizzaInOrder : pizzaInOrders){
            this.total += pizzaInOrder.getPriceAtBill();
        }
        for(FoodInOrder foodInOrder : foodInOrders){
            this.total += foodInOrder.getPriceAtBill();
        }
        for(DrinkInOrder drinkInOrder : drinkInOrders){
            this.total += drinkInOrder.getPriceAtBill();
        }
        return this.total;
    }

    public String getOrder_id() {
        return this.order_id;
    }

    public String getNote() {
        return this.note;
    }

    public String getPaymentMethod() {
        return this.paymentMethod;
    }

    public Date getDayOrder() {
        return this.dayOrder;
    }

    public String getState() {
        return this.state;
    }

    public Client getClient() {
        return this.client;
    }

    public Staff getStaff() {
        return this.staff;
    }

    public List<ComboInOrder> getDetailComboBills() {
        return this.comboInOrders;
    }

    public List<PizzaInOrder> getDetailPizzaBills() {
        return this.pizzaInOrders;
    }

    public List<FoodInOrder> getDetailFoodBills() {
        return this.foodInOrders;
    }

    public List<DrinkInOrder> getDetailDrinkBills() {
        return this.drinkInOrders;
    }

    public void setId(String id) {
        this.order_id = id;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void setDayOrder(Date dayOrder) {
        this.dayOrder = dayOrder;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void setStaff(Staff staff) {
        this.staff = staff;
    }

    public void setDetailComboBills(List<ComboInOrder> comboInOrders) {
        this.comboInOrders = comboInOrders;
    }

    public void setDetailPizzaBills(List<PizzaInOrder> pizzaInOrders) {
        this.pizzaInOrders = pizzaInOrders;
    }

    public void setDetailFoodBills(List<FoodInOrder> foodInOrders) {
        this.foodInOrders = foodInOrders;
    }

    public void setDetailDrinkBills(List<DrinkInOrder> drinkInOrders) {
        this.drinkInOrders = drinkInOrders;
    }

    public boolean equals(final Object o) {
        if (o == this) return true;
        if (!(o instanceof Order)) return false;
        final Order other = (Order) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$id = this.getOrder_id();
        final Object other$id = other.getOrder_id();
        if (this$id == null ? other$id != null : !this$id.equals(other$id)) return false;
        final Object this$note = this.getNote();
        final Object other$note = other.getNote();
        if (this$note == null ? other$note != null : !this$note.equals(other$note)) return false;
        final Object this$paymentMethod = this.getPaymentMethod();
        final Object other$paymentMethod = other.getPaymentMethod();
        if (this$paymentMethod == null ? other$paymentMethod != null : !this$paymentMethod.equals(other$paymentMethod))
            return false;
        final Object this$dayOrder = this.getDayOrder();
        final Object other$dayOrder = other.getDayOrder();
        if (this$dayOrder == null ? other$dayOrder != null : !this$dayOrder.equals(other$dayOrder)) return false;
        if (this.getTotal() != other.getTotal()) return false;
        final Object this$state = this.getState();
        final Object other$state = other.getState();
        if (this$state == null ? other$state != null : !this$state.equals(other$state)) return false;
        final Object this$client = this.getClient();
        final Object other$client = other.getClient();
        if (this$client == null ? other$client != null : !this$client.equals(other$client)) return false;
        final Object this$staff = this.getStaff();
        final Object other$staff = other.getStaff();
        if (this$staff == null ? other$staff != null : !this$staff.equals(other$staff)) return false;
        final Object this$detailComboBills = this.getDetailComboBills();
        final Object other$detailComboBills = other.getDetailComboBills();
        if (this$detailComboBills == null ? other$detailComboBills != null : !this$detailComboBills.equals(other$detailComboBills))
            return false;
        final Object this$detailPizzaBills = this.getDetailPizzaBills();
        final Object other$detailPizzaBills = other.getDetailPizzaBills();
        if (this$detailPizzaBills == null ? other$detailPizzaBills != null : !this$detailPizzaBills.equals(other$detailPizzaBills))
            return false;
        final Object this$detailFoodBills = this.getDetailFoodBills();
        final Object other$detailFoodBills = other.getDetailFoodBills();
        if (this$detailFoodBills == null ? other$detailFoodBills != null : !this$detailFoodBills.equals(other$detailFoodBills))
            return false;
        final Object this$detailDrinkBills = this.getDetailDrinkBills();
        final Object other$detailDrinkBills = other.getDetailDrinkBills();
        if (this$detailDrinkBills == null ? other$detailDrinkBills != null : !this$detailDrinkBills.equals(other$detailDrinkBills))
            return false;
        return true;
    }

    protected boolean canEqual(final Object other) {
        return other instanceof Order;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $id = this.getOrder_id();
        result = result * PRIME + ($id == null ? 43 : $id.hashCode());
        final Object $note = this.getNote();
        result = result * PRIME + ($note == null ? 43 : $note.hashCode());
        final Object $paymentMethod = this.getPaymentMethod();
        result = result * PRIME + ($paymentMethod == null ? 43 : $paymentMethod.hashCode());
        final Object $dayOrder = this.getDayOrder();
        result = result * PRIME + ($dayOrder == null ? 43 : $dayOrder.hashCode());
        result = result * PRIME + this.getTotal();
        final Object $state = this.getState();
        result = result * PRIME + ($state == null ? 43 : $state.hashCode());
        final Object $client = this.getClient();
        result = result * PRIME + ($client == null ? 43 : $client.hashCode());
        final Object $staff = this.getStaff();
        result = result * PRIME + ($staff == null ? 43 : $staff.hashCode());
        final Object $detailComboBills = this.getDetailComboBills();
        result = result * PRIME + ($detailComboBills == null ? 43 : $detailComboBills.hashCode());
        final Object $detailPizzaBills = this.getDetailPizzaBills();
        result = result * PRIME + ($detailPizzaBills == null ? 43 : $detailPizzaBills.hashCode());
        final Object $detailFoodBills = this.getDetailFoodBills();
        result = result * PRIME + ($detailFoodBills == null ? 43 : $detailFoodBills.hashCode());
        final Object $detailDrinkBills = this.getDetailDrinkBills();
        result = result * PRIME + ($detailDrinkBills == null ? 43 : $detailDrinkBills.hashCode());
        return result;
    }

    public String toString() {
        return "Order(id=" + this.getOrder_id() + ", note=" + this.getNote() + ", paymentMethod=" + this.getPaymentMethod() + ", dayOrder=" + this.getDayOrder() + ", total=" + this.getTotal() + ", state=" + this.getState() + ", client=" + this.getClient() + ", staff=" + this.getStaff() + ", detailComboBills=" + this.getDetailComboBills() + ", detailPizzaBills=" + this.getDetailPizzaBills() + ", detailFoodBills=" + this.getDetailFoodBills() + ", detailDrinkBills=" + this.getDetailDrinkBills() + ")";
    }
}
