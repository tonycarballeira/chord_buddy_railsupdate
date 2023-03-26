class AddUserToProgression < ActiveRecord::Migration[4.2]
  def change
    add_reference :progressions, :user, index: true
  end
end
