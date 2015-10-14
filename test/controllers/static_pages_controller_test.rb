require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get map" do
    get :map
    assert_response :success
  end

  test "should get contribute" do
    get :contribute
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
