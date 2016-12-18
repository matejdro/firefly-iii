<?php
/**
 * BillControllerTest.php
 * Copyright (C) 2016 thegrumpydictator@gmail.com
 *
 * This software may be modified and distributed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * See the LICENSE file for details.
 */
use FireflyIII\Repositories\Bill\BillRepositoryInterface;
use Illuminate\Support\Collection;


/**
 * Generated by PHPUnit_SkeletonGenerator on 2016-12-10 at 05:51:40.
 */
class BillControllerTest extends TestCase
{


    /**
     * Sets up the fixture, for example, opens a network connection.
     * This method is called before a test is executed.
     */
    public function setUp()
    {
        parent::setUp();
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::create
     */
    public function testCreate()
    {
        $this->be($this->user());
        $this->call('GET', route('bills.create'));
        $this->assertResponseStatus(200);
        // has bread crumb
        $this->see('<ol class="breadcrumb">');
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::delete
     */
    public function testDelete()
    {
        $this->be($this->user());
        $this->call('GET', route('bills.delete', [1]));
        $this->assertResponseStatus(200);
        // has bread crumb
        $this->see('<ol class="breadcrumb">');
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::destroy
     */
    public function testDestroy()
    {
        $repository = $this->mock(BillRepositoryInterface::class);
        $repository->shouldReceive('destroy')->andReturn(true);

        $this->session(['bills.delete.url' => 'http://localhost']);
        $this->be($this->user());
        $this->call('post', route('bills.destroy', [1]));
        $this->assertResponseStatus(302);
        $this->assertSessionHas('success');
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::edit
     */
    public function testEdit()
    {
        $this->be($this->user());
        $this->call('GET', route('bills.edit', [1]));
        $this->assertResponseStatus(200);
        // has bread crumb
        $this->see('<ol class="breadcrumb">');
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::index
     */
    public function testIndex()
    {
        $this->be($this->user());
        $this->call('GET', route('bills.index'));
        $this->assertResponseStatus(200);
        // has bread crumb
        $this->see('<ol class="breadcrumb">');
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::rescan
     */
    public function testRescan()
    {
        $repository = $this->mock(BillRepositoryInterface::class);
        $repository->shouldReceive('getPossiblyRelatedJournals')->once()->andReturn(new Collection);
        $this->be($this->user());
        $this->call('GET', route('bills.rescan', [1]));
        $this->assertResponseStatus(302);
        $this->assertSessionHas('success');
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::show
     */
    public function testShow()
    {
        $this->be($this->user());
        $this->call('GET', route('bills.show', [1]));
        $this->assertResponseStatus(200);
        // has bread crumb
        $this->see('<ol class="breadcrumb">');
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::store
     */
    public function testStore()
    {
        $data = [
            'name'                          => 'New Bill ' . rand(1000, 9999),
            'match'                         => 'some words',
            'amount_min'                    => 100,
            'amount_currency_id_amount_min' => 1,
            'amount_currency_id_amount_max' => 1,
            'skip'                          => 0,
            'amount_max'                    => 100,
            'date'                          => '2016-01-01',
            'repeat_freq'                   => 'monthly',
        ];
        $this->session(['bills.create.url' => 'http://localhost']);
        $this->be($this->user());
        $this->call('post', route('bills.store'), $data);
        $this->assertResponseStatus(302);
        $this->assertSessionHas('success');

        // list must be updated
        $this->be($this->user());
        $this->call('GET', route('bills.index'));
        $this->assertResponseStatus(200);
        $this->see('<ol class="breadcrumb">');
        $this->see($data['name']);
    }

    /**
     * @covers \FireflyIII\Http\Controllers\BillController::update
     */
    public function testUpdate()
    {
        $data = [
            'name'                          => 'Updated Bill ' . rand(1000, 9999),
            'match'                         => 'some more words',
            'amount_min'                    => 100,
            'amount_currency_id_amount_min' => 1,
            'amount_currency_id_amount_max' => 1,
            'skip'                          => 0,
            'amount_max'                    => 100,
            'date'                          => '2016-01-01',
            'repeat_freq'                   => 'monthly',
        ];
        $this->session(['bills.edit.url' => 'http://localhost']);
        $this->be($this->user());
        $this->call('post', route('bills.update', [1]), $data);
        $this->assertResponseStatus(302);
        $this->assertSessionHas('success');

        // list must be updated
        $this->be($this->user());
        $this->call('GET', route('bills.index'));
        $this->assertResponseStatus(200);
        $this->see('<ol class="breadcrumb">');
        $this->see($data['name']);
    }

}