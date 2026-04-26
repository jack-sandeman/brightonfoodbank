<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ClientsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Ensure guests are redirected to the login page.
     */
    public function test_guests_are_redirected_to_the_login_page(): void
    {
        $this->get('/clients')->assertRedirect('/login');
    }

    /**
     * Ensure authenticated users can view the clients page.
     */
    public function test_authenticated_users_can_visit_the_clients_page(): void
    {
        $this->actingAs(User::factory()->create());

        $this->get('/clients')->assertOk();
    }
}
